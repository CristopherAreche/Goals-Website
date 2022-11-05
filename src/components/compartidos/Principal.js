function Principal({ children }) {
  return (
    <>
      <sidebar>
        <a href="/lista">Lista</a>
        <a href="/crear">Crear</a>
      </sidebar>
      <main>{children}</main>
    </>
  );
}

export default Principal;
