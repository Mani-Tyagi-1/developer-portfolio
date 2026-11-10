import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090B] text-[#FAFAFA] px-4 text-center">
      <div className="font-mono text-xs text-emerald-400 mb-2">&gt; ERROR_CODE: 404 // RESOURCE_NOT_FOUND</div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">Page Not Found</h1>
      <p className="text-sm text-zinc-400 max-w-md mb-6">
        The requested endpoint or architectural route does not exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-white transition-colors"
      >
        Return to Engineering Console
      </Link>
    </div>
  );
}

