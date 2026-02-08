"use client";

import { useEffect, useState, useCallback } from "react";

/** お問い合わせデータ型 */
interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  industry: string | null;
  message: string;
  status: "new" | "read" | "replied";
  created_at: string;
}

/** ステータスラベル・色マッピング */
const STATUS_CONFIG = {
  new: { label: "新着", bg: "bg-blue-100 text-blue-700" },
  read: { label: "確認済", bg: "bg-yellow-100 text-yellow-700" },
  replied: { label: "返信済", bg: "bg-green-100 text-green-700" },
} as const;

/** 業種ラベルマッピング */
const INDUSTRY_LABELS: Record<string, string> = {
  seitai: "整体院",
  salon: "美容室・サロン",
  food: "飲食店",
  medical: "医療・クリニック",
  shigyou: "士業",
  retail: "小売",
  service: "サービス業",
  construction: "建設・不動産",
  it: "IT・Web",
  other: "その他",
};

/**
 * 管理画面：お問い合わせ一覧
 */
export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  /** データ取得 */
  const fetchContacts = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/contacts");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setContacts(data.contacts);
    } catch (err) {
      setError(err instanceof Error ? err.message : "取得に失敗しました");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  /** ステータス更新 */
  const updateStatus = async (id: string, status: string) => {
    setUpdating(true);
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      // ローカル更新
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: data.contact.status } : c))
      );
    } catch (err) {
      alert(err instanceof Error ? err.message : "更新に失敗しました");
    } finally {
      setUpdating(false);
    }
  };

  /** 選択中のお問い合わせ */
  const selected = contacts.find((c) => c.id === selectedId) ?? null;

  /** 新着件数 */
  const newCount = contacts.filter((c) => c.status === "new").length;

  if (loading) {
    return (
      <div className="p-8">
        <p className="text-gray-500">読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* ヘッダー */}
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-2xl font-bold text-navy">お問い合わせ</h1>
        {newCount > 0 && (
          <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
            {newCount}件の新着
          </span>
        )}
      </div>

      <div className="flex gap-6">
        {/* 一覧テーブル */}
        <div className={`${selected ? "w-1/2" : "w-full"} transition-all`}>
          {contacts.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-400">
              お問い合わせはまだありません
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left px-4 py-3 font-medium text-gray-500">日時</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-500">氏名</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-500">会社名</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-500">内容</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-500">状態</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr
                      key={contact.id}
                      onClick={() => setSelectedId(contact.id === selectedId ? null : contact.id)}
                      className={`border-b border-gray-50 cursor-pointer transition-colors ${
                        contact.id === selectedId
                          ? "bg-accent/5"
                          : contact.status === "new"
                            ? "bg-blue-50/50 hover:bg-blue-50"
                            : "hover:bg-gray-50"
                      }`}
                    >
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                        {formatDate(contact.created_at)}
                      </td>
                      <td className="px-4 py-3 font-medium text-navy whitespace-nowrap">
                        {contact.name}
                      </td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                        {contact.company || "—"}
                      </td>
                      <td className="px-4 py-3 text-gray-500 max-w-[200px] truncate">
                        {contact.message}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={contact.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 詳細パネル */}
        {selected && (
          <div className="w-1/2 bg-white rounded-xl border border-gray-200 p-6 sticky top-8 self-start">
            {/* ヘッダー */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-navy">{selected.name}</h2>
                <p className="text-sm text-gray-400">{formatDate(selected.created_at)}</p>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* 情報 */}
            <div className="space-y-3 mb-6 text-sm">
              <InfoRow label="メール" value={selected.email} isLink />
              <InfoRow label="電話" value={selected.phone || "未入力"} />
              <InfoRow label="会社名" value={selected.company || "未入力"} />
              <InfoRow
                label="業種"
                value={selected.industry ? (INDUSTRY_LABELS[selected.industry] || selected.industry) : "未選択"}
              />
            </div>

            {/* 本文 */}
            <div className="mb-6">
              <p className="text-xs font-medium text-gray-500 mb-2">ご相談内容</p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-navy leading-relaxed whitespace-pre-wrap">
                {selected.message}
              </div>
            </div>

            {/* ステータス変更 */}
            <div>
              <p className="text-xs font-medium text-gray-500 mb-2">ステータス変更</p>
              <div className="flex gap-2">
                {(["new", "read", "replied"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => updateStatus(selected.id, s)}
                    disabled={updating || selected.status === s}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                      selected.status === s
                        ? STATUS_CONFIG[s].bg + " ring-2 ring-offset-1 ring-current"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {STATUS_CONFIG[s].label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/** ステータスバッジ */
function StatusBadge({ status }: { status: Contact["status"] }) {
  const config = STATUS_CONFIG[status];
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${config.bg}`}>
      {config.label}
    </span>
  );
}

/** 情報行 */
function InfoRow({
  label,
  value,
  isLink,
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) {
  return (
    <div className="flex">
      <span className="w-20 text-gray-500 flex-shrink-0">{label}</span>
      {isLink ? (
        <a href={`mailto:${value}`} className="text-accent hover:underline">
          {value}
        </a>
      ) : (
        <span className="text-navy">{value}</span>
      )}
    </div>
  );
}

/** 日時フォーマット */
function formatDate(iso: string): string {
  const d = new Date(iso);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${month}/${day} ${hours}:${minutes}`;
}
