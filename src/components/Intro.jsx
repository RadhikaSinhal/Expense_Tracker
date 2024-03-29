import { Form } from "react-router-dom"

import { UserPlusIcon } from "@heroicons/react/24/solid";

import illustration2 from "../assets/illustration2.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
        Start your path to financial freedom by making a budget!
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration2} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro