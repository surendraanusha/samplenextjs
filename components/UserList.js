import Link from "next/link"



const UserList = (props) => {
    const {userObj} = props
  return (
    <div className="rounded-[5px] border-solid border p-2 hover:shadow-lg hover:border-cyan-200 shadow-gray-400 relative top-0 cursor-pointer">
      <h1 className="sm:text-sm md:text-stone-800 font-bold md:text-xl">Name:{userObj.name}</h1>
      <p className="break-all sm:text-sm text-stone-700 font-semibold md:text-lg">UserName:{userObj.username}</p>
      <p className="break-all text-stone-600 font-semibold">Mail:{userObj.email}</p>
      <p className="break-all text-stone-500 font-semibold">Website:{userObj.website}</p>
      <p className="break-all text-stone-500 font-semibold">Cell:{userObj.phone}</p>
      <Link href={`/user/${userObj.id}`}>
        <button className="bg-sky-500 p-1 rounded-md text-slate-50 font-semibold mt-3">Know More</button>
      </Link>
    </div>
  )
}

export default UserList
