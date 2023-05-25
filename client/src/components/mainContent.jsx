import Post from "./post";
import UsrProfileWFooter from "./userprofileWithFooter";
import Users from "./users";


const Maincontent = () => {
    return(
        <div className="w-4/5 h-screen py-[4rem]">
            <div className="flex gap-5">
                <div className="flex flex-col">
                    <Users/>
                    <Post/>
                </div>
                <div className="w-full ml-5">
                    <UsrProfileWFooter/>
                </div>
            </div>
        </div>
    )
}

export default Maincontent;