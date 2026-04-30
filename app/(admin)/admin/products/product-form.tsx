"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { PRODUCT_CATEGORIES } from "@/lib/products";
import type { ProductFormState } from "./actions";

type Mode = "create" | "edit";

type Initial = {
  id?: string;
  name?: string;
  slug?: string;
  category?: string;
  description?: string | null;
  image?: string;
  priceCents?: number;
  featured?: boolean;
  active?: boolean;
};

export function ProductForm({
  mode,
  initial,
  action,
}: {
  mode: Mode;
  initial?: Initial;
  action: (state: ProductFormState, formData: FormData) => Promise<ProductFormState>;
}) {
  const [state, formAction, pending] = useActionState<ProductFormState, FormData>(action, undefined);
  const [imagePreview, setImagePreview] = useState(initial?.image ?? "");

  const v = state?.values ?? {};
  const get = (key: keyof typeof v, fallback: string) =>
    typeof v[key] === "string" ? (v[key] as string) : fallback;

  const initialPrice = initial?.priceCents != null ? (initial.priceCents / 100).toFixed(2) : "";

  return (
    <form action={formAction} className="space-y-8 max-w-3xl">
      {state?.error && (
        <div className="border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          {state.error}
        </div>
      )}

      {mode === "edit" && !state?.error && state?.values && !state?.fieldErrors && (
        <div className="border border-emerald-500/30 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-400">
          Saved.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field
          label="Name"
          name="name"
          defaultValue={get("name", initial?.name ?? "")}
          error={state?.fieldErrors?.name}
          required
        />
        <Field
          label="Slug"
          name="slug"
          placeholder="auto-generated from name"
          defaultValue={get("slug", initial?.slug ?? "")}
          error={state?.fieldErrors?.slug}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
            Category
          </label>
          <select
            name="category"
            defaultValue={get("category", initial?.category ?? "")}
            required
            className="w-full h-11 bg-transparent border-b border-foreground/20 text-sm focus:outline-none focus:border-accent transition-colors"
          >
            <option value="">Select…</option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {state?.fieldErrors?.category && (
            <p className="mt-2 text-[11px] text-red-600 dark:text-red-400">
              {state.fieldErrors.category}
            </p>
          )}
        </div>
        <Field
          label="Price (USD)"
          name="price"
          placeholder="148.00"
          defaultValue={get("price", initialPrice)}
          error={state?.fieldErrors?.price}
          required
        />
      </div>

      <div>
        <Field
          label="Image URL"
          name="image"
          placeholder="https://..."
          defaultValue={get("image", initial?.image ?? "")}
          error={state?.fieldErrors?.image}
          onChange={(val) => setImagePreview(val)}
          required
        />
        {imagePreview && (
          <div className="relative mt-4 w-40 h-52 bg-foreground/5 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imagePreview} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div>
        <label className="block text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
          Description
        </label>
        <textarea
          name="description"
          rows={5}
          defaultValue={get("description", initial?.description ?? "")}
          className="w-full bg-transparent border border-foreground/20 text-sm p-3 focus:outline-none focus:border-accent transition-colors leading-relaxed"
        />
        {state?.fieldErrors?.description && (
          <p className="mt-2 text-[11px] text-red-600 dark:text-red-400">
            {state.fieldErrors.description}
          </p>
        )}
      </div>

      <div className="flex items-center gap-8">
        <Checkbox
          name="active"
          label="Active (visible on storefront)"
          defaultChecked={initial?.active ?? true}
          stateValue={state?.values?.active}
        />
        <Checkbox
          name="featured"
          label="Featured (home page)"
          defaultChecked={initial?.featured ?? false}
          stateValue={state?.values?.featured}
        />
      </div>

      <div className="flex items-center gap-4 pt-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center h-11 px-8 bg-foreground text-background text-[11px] tracking-[0.25em] uppercase hover:bg-accent transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? "Saving…" : mode === "create" ? "Create Product" : "Save Changes"}
        </button>
        <Link
          href="/admin/products"
          className="text-[11px] tracking-[0.25em] uppercase text-muted hover:text-accent transition-colors"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  placeholder,
  error,
  required,
  onChange,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        onChange={onChange ? (e) => onChange(e.currentTarget.value) : undefined}
        className="w-full h-11 bg-transparent border-b border-foreground/20 text-sm placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors"
      />
      {error && <p className="mt-2 text-[11px] text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}

function Checkbox({
  name,
  label,
  defaultChecked,
  stateValue,
}: {
  name: string;
  label: string;
  defaultChecked?: boolean;
  stateValue?: string;
}) {
  // If we have a re-rendered state, prefer that; else use defaultChecked
  const checked = stateValue !== undefined ? stateValue === "on" : undefined;
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer text-sm">
      <input
        type="checkbox"
        name={name}
        defaultChecked={checked ?? defaultChecked}
        className="w-4 h-4 accent-current"
      />
      <span>{label}</span>
    </label>
  );
}

