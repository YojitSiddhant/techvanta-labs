"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function EntryClock() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    router.prefetch("/home");
  }, [router]);

  function handleEnter() {
    setIsTransitioning(true);
    startTransition(() => {
      router.push("/home");
    });
  }

  return (
    <section className="entry-clock" aria-label="TechVanta Labs landing page">
      <div className="entry-clock__quote">
        <p>&quot;Technology You Can Trust. Technology You Control.&quot;</p>
        <span>TechVanta Labs</span>
      </div>

      <div className="entry-clock__actions">
        <button
          type="button"
          className="entry-clock__enter"
          onClick={handleEnter}
          disabled={isTransitioning}
        >
          <span className="entry-clock__enter-typing">Let&apos;s Build Something</span>
        </button>
      </div>
    </section>
  );
}
