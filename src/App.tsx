import { useEffect } from "react"
import { useAuthStore } from "./stores/AuthStore"
import supabase from "./utils/supabase"
import Header from "./components/Header"
import Headline from "./components/Headline"
import ScrollToTop from "./components/ScrollToTop"
import Showcase from "./components/ShowCase"
import AddBookmark from "./components/Bookmarks/Add"
import TagList from "./components/TagList"
import Bookmarks from "./components/Bookmarks/Bookmarks"

function App() {

  const { session, setSession } = useAuthStore(state => ({ session: state.session, setSession: state.setSession }))

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <>
      <div className="relative flex flex-col pb-20 text-zinc-200 bg-zinc-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] bg-[length:1200px_800px] from-zinc-400/10 to-60% to-transparent bg-top bg-no-repeat selection:bg-zinc-500/20 antialiased">
        <Header />
        <main className=" flex flex-col items-center md:w-5/6 w-11/12 max-w-6xl gap-8 mx-auto min-h-screen bg-[length:1200px_800px] bg-top bg-no-repeat style={{ backgroundImage: `url(${grid})`">
          <Headline />

          <ScrollToTop />

          {session ? <> <AddBookmark /> <TagList /> <Bookmarks/> </> : <Showcase />}
        </main>
      </div>
    </>
  )
}

export default App
