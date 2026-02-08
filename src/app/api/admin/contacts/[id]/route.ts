import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

/**
 * PATCH /api/admin/contacts/[id]
 * ステータス更新（new → read → replied）
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    let body: { status?: string };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "リクエストの形式が不正です" },
        { status: 400 }
      );
    }

    const validStatuses = ["new", "read", "replied"];
    if (!body.status || !validStatuses.includes(body.status)) {
      return NextResponse.json(
        { error: "無効なステータスです" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("contacts")
      .update({ status: body.status })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("contacts更新エラー:", error);
      return NextResponse.json(
        { error: "更新に失敗しました" },
        { status: 500 }
      );
    }

    return NextResponse.json({ contact: data });
  } catch (error) {
    console.error("contacts PATCH エラー:", error);
    return NextResponse.json(
      { error: "サーバーエラー" },
      { status: 500 }
    );
  }
}
