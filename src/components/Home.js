import { useAuth } from "../middleware/auth";
function Home() {
    const { accountData } = useAuth();
    // console.log("home.js ", accountData);
    return (
        <>
            <div className="d-flex align-items-center " style={{ height: "100vh" }}>
                <div className="container  m-5 " style={{ height: "auto" }}>
                    <div className="d-flex flex-wrap">
                        <div className="d-flex justify-content-around align-items-center  w-100 h-50 border flex-wrap">
                            {accountData?.map((items, index) => {
                                return (
                                    <>
                                        <div key={index}>
                                            <p className="fs-3 border-bottom border-dark">{items.bankName}</p>
                                            <div className="border p-3 mb-2 bg-secondary bg-opacity-10 border rounded h-25">{items.amount}</div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
