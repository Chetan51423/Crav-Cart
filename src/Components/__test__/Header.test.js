import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from "../../Utils/Store"
import {StaticRouter } from "react-router-dom/server"

test("logo should load on rendering header",()=>{

    // load header

    const header = render(
        <StaticRouter>
            <Provider store={store}><Header/></Provider>
        </StaticRouter>
        
    );

    const logo = header.getAllByTestId("logo");
    // console.log(logo[0]);
    expect(logo[0].src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGndx19Dehe1qY2ZDX0Q2zFMRxb5QjOp4H5vIV30gPkq7ECVPwFJyElPSZpGNdA-fn-w&usqp=CAU")
    // check if logo is imported
})

