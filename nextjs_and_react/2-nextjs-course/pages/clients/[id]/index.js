import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // router.push("/clients/max/projecta");
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "max", clientProjectId: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
