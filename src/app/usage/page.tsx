import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usage - Email Claude",
  description: "Learn how to use email-claude to control Claude Code through email",
};

export default function UsagePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full max-w-3xl py-16 px-8 bg-white dark:bg-black sm:px-16">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 mb-8">
            Usage
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-100 mb-4">
              How It Works
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>
                Send an email to{" "}
                <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm">
                  {"{project}"}@code.patch.agency
                </code>{" "}
                to make changes to that repo
              </li>
              <li>First email creates a new branch and PR</li>
              <li>Reply emails continue the same session and add to the PR</li>
              <li>Claude makes atomic commits for each logical change</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-100 mb-4">
              Email Format
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>
                <strong>To:</strong> The project name becomes the email prefix
                (e.g.{" "}
                <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm">
                  webapp@code.patch.agency
                </code>
                )
              </li>
              <li>
                <strong>Subject:</strong> Describe your task (e.g. &quot;webapp -
                Add contact form&quot;)
              </li>
              <li>
                <strong>Body:</strong> Detailed instructions for Claude
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-100 mb-4">
              Available Commands
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Put these in the subject line:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>
                <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm">
                  [merge]
                </code>{" "}
                - Merge the PR when ready
              </li>
              <li>
                <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm">
                  [close]
                </code>{" "}
                - Close the PR without merging
              </li>
              <li>
                <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm">
                  [status]
                </code>{" "}
                - Get current PR status
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-100 mb-4">
              Examples
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-200 mb-3">
                  Create a new feature
                </h3>
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500 dark:text-zinc-500">To:</span>{" "}
                    webapp@code.patch.agency
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500 dark:text-zinc-500">
                      Subject:
                    </span>{" "}
                    webapp - Add dark mode toggle
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    <span className="text-zinc-500 dark:text-zinc-500">
                      Body:
                    </span>{" "}
                    Add a dark mode toggle to the settings page that persists to
                    localStorage
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-200 mb-3">
                  Follow up on existing work
                </h3>
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500 dark:text-zinc-500">To:</span>{" "}
                    webapp@code.patch.agency
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500 dark:text-zinc-500">
                      Subject:
                    </span>{" "}
                    Re: webapp - Add dark mode toggle
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    <span className="text-zinc-500 dark:text-zinc-500">
                      Body:
                    </span>{" "}
                    Also make the toggle keyboard accessible with Enter/Space keys
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-200 mb-3">
                  Merge when done
                </h3>
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500 dark:text-zinc-500">To:</span>{" "}
                    webapp@code.patch.agency
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500 dark:text-zinc-500">
                      Subject:
                    </span>{" "}
                    Re: webapp - Add dark mode toggle [merge]
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-200 mb-3">
                  Check status
                </h3>
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500 dark:text-zinc-500">To:</span>{" "}
                    webapp@code.patch.agency
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500 dark:text-zinc-500">
                      Subject:
                    </span>{" "}
                    Re: webapp - Add dark mode toggle [status]
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-100 mb-4">
              Tips
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>Keep subject lines consistent to maintain the same session</li>
              <li>Attach files (images, specs) and Claude can reference them</li>
              <li>Each reply continues the conversation context</li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}
