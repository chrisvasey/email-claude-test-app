export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            Built by Email
          </h1>
          <p className="max-w-lg text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            This app is built entirely through{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">
              email-claude
            </span>{" "}
            — a system that lets you build software by sending emails to Claude.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            How it works
          </h2>
          <ol className="flex flex-col gap-4 text-lg text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                1
              </span>
              <span>Send an email describing what you want to build or change</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                2
              </span>
              <span>Claude reads your request and implements the changes</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                3
              </span>
              <span>A pull request is created with the new code</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                4
              </span>
              <span>You receive an email reply with a summary of the changes</span>
            </li>
          </ol>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">This is a living demo.</span> Every
            feature you see here was added by sending an email. New features
            continue to be added the same way.
          </p>
        </div>
      </main>
    </div>
  );
}
