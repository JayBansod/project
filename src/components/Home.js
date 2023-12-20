import { useAuth } from "../middleware/auth";
function Home() {
    const { userData } = useAuth();
    const [first, setFirst] = useState(true);

    if (first && userData) {
        setUser({ userName: userData.userName, email: userData.email, message: "" });
        setFirst(false);
    }
    return (
        <>
            <div className="d-flex align-items-center " style={{ height: "100vh" }}>
                <div className="container  m-5 " style={{ height: "auto" }}>
                    <div className="d-flex flex-wrap">
                        <div className="d-flex justify-content-around align-items-center  w-100 h-50 border flex-wrap">
                            <div>
                                <p className="fs-3 border-bottom border-dark">ABC</p>
                                <div className="border p-3 mb-2 bg-secondary bg-opacity-10 border rounded h-25">1200</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
