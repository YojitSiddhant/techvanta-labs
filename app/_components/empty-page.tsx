type EmptyPageProps = {
  title: string;
};

export function EmptyPage({ title }: EmptyPageProps) {
  return (
    <section className="empty-page" aria-label={`${title} page`}>
      <h1 className="sr-only">{title}</h1>
    </section>
  );
}
