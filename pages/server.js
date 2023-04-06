import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import Layout from "../components/layout"

export default function ServerSidePage({ session }) {
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  return (
    <Layout>
      <h1>Lorem, ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem aut deserunt, fugiat voluptatibus porro?
      </p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </Layout>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  }
}
