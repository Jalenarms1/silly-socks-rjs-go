import './App.css'
import Layout from './components/Layout'
import { HomeCatalog } from './components/HomeCatalog'

function App() {

  return (
    <Layout>
      <div className="flex flex-col">
      <div className="w-full bg-red-600 p-5 text-white flex flex-col gap-4 items-center text-center">
        <div className="flex flex-col gap-2">
          <p className="text-3xl text-white font-semibold">Silly Socks and More</p>
          <p className="text-sm text-zinc-200">Sign up to recieve email notifications on new products.</p>
        </div>
        <button className="btn btn-primary w-fit px-6 text-white">Sign Up</button>
      </div>
      <HomeCatalog />
    </div>
    </Layout>
  )
}

export default App
