import './tabs.style.css'
export default function Tabs()
{
    return(
        <>
            <div role="tablist" className="tabs tabs-boxed">
            <button className="btn btn-active btn-outline w-30 h-3 mr-3 rounded-full">ALL</button>
            <button className="btn btn-outline w-30 mr-3 rounded-full">CASE STUDY</button>
            <button className="btn btn-outline w-30 mr-3 rounded-full">DEVELOPERS BLOG</button>
            <button className="btn btn-outline w-30 mr-3 rounded-full">PODCAST</button>
            <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full" />
            </div>
            <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            </div>
        </>
    )
}
