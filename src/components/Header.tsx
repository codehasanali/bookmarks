import { useAuthStore } from '../stores/AuthStore'
import useScrollProgess from '../hooks/useScrollProgess'
import Login from './Login'
import CommandMenu from './CommandMenu'





export default function Header() {


    const session = useAuthStore(state => state.session)

    const completion = useScrollProgess()
    return (
        <header className="sticky top-0 z-30 w-full py-2 border-b backdrop-blur-xl backdrop-saturate-150 bg-zinc-900/40 border-zinc-700">
            <div className="flex items-center justify-between w-11/12 max-w-6xl gap-2 mx-auto md:w-10/12">
                {session && <img className="w-6 rounded-full" src={session.user.user_metadata.avatar_url} alt="profile picture" />}
                <p className="font-bold">Bookmarks</p>
                {session && <CommandMenu />}
                <Login>Login</Login>
            </div>
            {session && <span className="absolute bottom-[-1px] w-full h-[1px] bg-zinc-400 duration-300" style={{ transform: `translateX(${completion - 100}%)` }}></span>}
        </header>
    )
}
