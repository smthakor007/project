// import React from 'react'

// export default function Home() {
//     return (
//         <div className='text-center container' >
//             <nav className='mt-4'>
//                 <a href="" className='mx-2'>Home</a>
//                 <a href="" className='mx-2'>About</a>
//                 <a href="" className='mx-2'>Contact</a>
//                 <a href="" className='mx-2'>Cart</a>
//             </nav>

//            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sequi id nesciunt, tempora et neque nemo, rem enim voluptas eius ipsum, amet quaerat! Ab nemo, quasi minus magni nobis iusto.
//            </p>
//         </div>

//     )
// }

import React from 'react'

export default function Home() {
    return (
        <>
            <header className="bg-dark py-3">
                <div className="container d-flex justify-content-between align-items-center">
                    <h2 className="text-white m-0">MyWebsite</h2>

                    <nav className="nav">
                        <a className="nav-link text-white fw-semibold" href="#">Home</a>
                        <a className="nav-link text-white fw-semibold" href="#">About</a>
                        <a className="nav-link text-white fw-semibold" href="#">Contact</a>
                        <a className="nav-link text-white fw-semibold" href="#">Cart</a>
                    </nav>
                </div>
            </header>

            <section className="container text-center mt-5">
                <h1 className="fw-bold mb-3">
                    Welcome to <span className="text-primary">MyWebsite</span>
                </h1>

                <p className="text-muted w-75 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim voluptas nesciunt non laudantium mollitia soluta nulla dolore. Dignissimos id ipsam, in alias laboriosam vero corrupti sed repudiandae, explicabo nostrum pariatur cumque rerum consequatur nisi, veritatis eum quibusdam eos amet minima et! Suscipit nemo totam doloribus laboriosam aliquid dicta debitis!
                </p>

                <button className="btn btn-primary mt-3 px-8">
                    Explore Now
                </button>
            </section>
        </>
    )
}
