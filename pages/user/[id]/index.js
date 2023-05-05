
const index = (props) => {
    const{userInfo} = props
  return (
    <div className="p-4 md:p-0 flex justify-center items-center h-[80vh]">
        <div className="rounded-[5px] border-solid border p-2 hover:shadow-lg hover:border-cyan-200 shadow-gray-400 cursor-default w-80">
            <h1 className="sm:text-sm md:text-stone-800 font-bold md:text-xl">Name: {userInfo.name}</h1>
            <p className="break-all sm:text-sm text-stone-700 font-semibold md:text-lg">UserName: {userInfo.username}</p>
            <p className="break-all text-stone-600 font-semibold">Mail: {userInfo.email}</p>
            <p className="break-all text-stone-500 font-semibold">website: {userInfo.website}</p>
            <p className="break-all text-stone-500 font-semibold"><span className="font-bold text-black">Phone:</span> {userInfo.phone}</p>
            <p className="font-bold">Address:</p>
            <p className="font-semibold">Street: {userInfo.address.street}</p>
            <p className="font-semibold">City: {userInfo.address.city}</p>
            <p className="font-semibold">ZipCode: {userInfo.address.zipcode}</p>
            <p className="font-semibold">Website: {userInfo.website}</p>
            <p className="font-semibold">Company Name: {userInfo.company.name}</p>
        </div>
    </div>
    
  )
}

export async function getStaticProps(context){
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const userInfo = await resp.json()
    return {props:{userInfo}}
}

export async function getStaticPaths(){
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await resp.json()
    const paths = users.map(eachUser=>({params:{id:eachUser.id.toString()}}))
    return{
        paths,
        fallback:false
    }
}


export default index

// {userInformation.name}