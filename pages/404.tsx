import Link from "next/link";

const NotFound = () => (
    <div className="column-center-container">
      <h1>404 :(</h1>
      <Link href="/"><a>Go back to home</a></Link>
    </div>
);

export default NotFound;
