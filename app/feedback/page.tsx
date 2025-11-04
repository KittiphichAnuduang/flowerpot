export default function FeedbackPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">Feedback</h1>
      <p className="text-sm text-neutral-500">
        FlowerPot works fully offline, so it can’t send reports directly. If you spot an error or have suggestions, please reach out:
      </p>
      <ul className="list-inside list-disc text-sm">
        <li>Email: <a className="underline" href="mailto:flowerpotdev@email.com">flowerpotdev@email.com</a></li>
        <li>GitHub: <a className="underline" href="https://github.com/yourname/flowerpot">github.com/yourname/flowerpot</a></li>
      </ul>
    </main>
  );
}
