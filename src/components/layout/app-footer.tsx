export function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {currentYear} España Deportes. Un proyecto de asignación de PBL.</p>
        <p className="mt-1 text-sm">Diseñado con pasión por el deporte español.</p>
      </div>
    </footer>
  );
}
