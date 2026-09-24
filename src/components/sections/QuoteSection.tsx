"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, FileUp, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/shared/SectionTitle";
import { quoteData } from "@/data/quote";

export default function QuoteSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setLoading(true);
    setError(null);
    setSent(false);

    try {
      const formData = new FormData(form);
      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSent(true);
      form.reset();
    } catch (err: any) {
      setError(err?.message || "An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="py-[76px] bg-secondary/60 border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div>
          <SectionTitle
            label={quoteData.label}
            title={quoteData.title}
            copy={quoteData.copy}
          />
          <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <FileUp className="text-brand-orange" /> {quoteData.fileHelper}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" aria-label="Quote request form">
          {quoteData.fields.map(({ label, name, placeholder, type, required, maxLength }) => (
            <label key={label} className="grid gap-2 text-xs font-bold uppercase text-primary">
              {label}
              <input
                type={type}
                name={name || label.toLowerCase()}
                placeholder={placeholder}
                required={required}
                maxLength={maxLength}
                className="h-12 rounded-[8px] lg:rounded-[16px] border border-input bg-background px-4 text-sm font-normal normal-case outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20 placeholder:text-muted-foreground/50"
              />
            </label>
          ))}

          <label className="grid gap-2 text-xs font-bold uppercase text-primary">
            Upload Drawing/File
            <input
              type="file"
              name="file"
              accept={quoteData.acceptedFiles}
              className="h-12 rounded-[8px] lg:rounded-[16px] border border-dashed border-input bg-secondary p-2 text-xs font-normal normal-case file:mr-3 file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-primary-foreground file:rounded-md"
            />
          </label>

          <label className="grid gap-2 text-xs font-bold uppercase text-primary sm:col-span-2">
            Message
            <textarea
              name="message"
              placeholder={quoteData.messagePlaceholder}
              maxLength={1500}
              rows={5}
              className="resize-none rounded-[8px] lg:rounded-[16px] border border-input bg-background p-4 text-sm font-normal normal-case outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20 placeholder:text-muted-foreground/50"
            />
          </label>

          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <Button type="submit" size="lg" variant="orange" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin mr-2" /> Sending...
                </>
              ) : (
                <>
                  Send Enquiry <ArrowRight />
                </>
              )}
            </Button>
            {sent && (
              <p role="status" className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Check className="size-4 text-brand-orange" /> Thank you. Your enquiry has been received and confirmed via email.
              </p>
            )}
            {error && (
              <p role="alert" className="flex items-center gap-2 text-sm font-semibold text-destructive">
                <AlertCircle className="size-4 text-destructive" /> {error}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

