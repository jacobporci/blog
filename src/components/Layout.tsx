interface Props {
  children: JSX.Element;
}
export default function Layout({ children }: Props) {
  return (
    <main className="flex min-h-screen flex-col  my-3 p-20">
      <div></div>
      {children}
    </main>
  );
}
