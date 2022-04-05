import React from 'react';

const Blogs = () => {
    return (
        <div>
            <article>
                <div>
                    <p className='text-4xl font-bold text-pink-700 '>What is Context Api ?</p>
                    <p className='text-xl font-bold border-4 rounded-xl p-10 m-10'>The react context Api efficiently produce global variable that can be used anywhere in react app. 
                    It is also the easier , lighter approach to state management through redux. 
                    It is newly added in the version 16.3 of React. It is also provides a way to pass data to components without having to pass props manually at every single level. 

                      </p>
                </div>
            </article>
            <article>
                <div>
                    <p className='text-4xl font-bold text-pink-700 '>what is semantic tags ?</p>
                    <p className='text-xl font-bold border-4 rounded-xl p-10 m-10'>

                    `Semantic HTML elements are clearly describe meaning in a human and machine readable way. 
                    Semantic tags considered because they accurately describe the purpose of the element and type of content. 
                    Semantic tags: form, header, table, and article
                    Sematic tags are very useful now a days.  It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content.


                    </p>
                </div>
            </article>
        </div>
    );
};

export default Blogs;