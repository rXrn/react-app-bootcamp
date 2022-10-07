import { useParams, useSearchParams } from "react-router-dom";

export function SayHello(props) {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(params);
  console.log(searchParams.get("person"), searchParams.get("address"));
  return <h1>Halo {params.person || ""}, Welcome to React Application</h1>;
}
