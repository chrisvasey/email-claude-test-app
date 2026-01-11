import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap - Email Claude",
  description: "Future features and improvements planned for email-claude",
};

export default function RoadmapPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full max-w-3xl py-16 px-8 bg-white dark:bg-black sm:px-16">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 mb-8">
            Roadmap
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-100 mb-4">
              Upcoming Features
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
              Here are some features we're planning to add to email-claude. These
              can all be implemented by sending emails!
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-xl font-medium text-black dark:text-zinc-200 mb-2">
                  Multi-Repository Support
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  Manage multiple projects from a single email interface. Switch
                  between repos seamlessly.
                </p>
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500">Example:</span>
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    To: frontend@code.patch.agency
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Subject: Update login UI
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-3">
                    Then send to: backend@code.patch.agency
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Subject: Add new API endpoint
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-xl font-medium text-black dark:text-zinc-200 mb-2">
                  Code Review Comments
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  Reply to PR review comments via email. Claude will address
                  feedback and update the code accordingly.
                </p>
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500">Example:</span>
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    Subject: Re: Add user authentication [review]
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    Body: Please add input validation for the email field and use
                    bcrypt for password hashing
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-xl font-medium text-black dark:text-zinc-200 mb-2">
                  Scheduled Tasks
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  Schedule code changes to be implemented at a specific time. Great
                  for planning deployments or time-sensitive updates.
                </p>
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500">Example:</span>
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    Subject: Update pricing page [schedule: 2026-01-15 09:00 UTC]
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    Body: Change the monthly plan from $29 to $39
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-xl font-medium text-black dark:text-zinc-200 mb-2">
                  Testing Integration
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  Automatically run tests before creating PRs. Get test results in
                  your email reply.
                </p>
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500">Example:</span>
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    Subject: Fix checkout bug [test]
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    Body: The payment processing fails when discount codes are
                    applied
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-3 italic">
                    Response will include: "All 47 tests passed"
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-xl font-medium text-black dark:text-zinc-200 mb-2">
                  Branch Management
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  Create feature branches, switch between them, or merge branches
                  using simple email commands.
                </p>
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500">Example:</span>
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    Subject: [branch: feature/payment-v2] Add Stripe integration
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    Body: Implement Stripe checkout with webhook handling
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-xl font-medium text-black dark:text-zinc-200 mb-2">
                  Rollback Support
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  Quickly revert changes if something goes wrong. Reference previous
                  commits or PRs by email.
                </p>
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="text-zinc-500">Example:</span>
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    Subject: [rollback] Revert authentication changes
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    Body: Rollback to commit abc123 - the new auth is causing login
                    issues
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-100 mb-4">
              Future Ideas
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>Email-based code search and documentation queries</li>
              <li>Integration with CI/CD pipelines for automatic deployments</li>
              <li>Team collaboration features with email threading</li>
              <li>Voice-to-email for hands-free coding requests</li>
              <li>Attachment support for design files and specifications</li>
              <li>Analytics dashboard for tracking changes over time</li>
            </ul>
          </section>

          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 mt-8">
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              <span className="font-semibold">Have an idea?</span> Send an email
              with your feature request! This roadmap itself can be updated through
              email.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
