import React,{useState} from 'react'

const Cards = ({key,id,name,image,category,area,ingredient1,ingredient2,ingredient3,ingredient4,
  ingredient5,ingredient6,ingredient7,ingredient8,instructions,youtube}) => {
  // console.log(`Inside recipe funtion: ${recipe.strMeal}`);

  const [showModal,setShowModal] = useState(false);
  
  const handleClick = () =>{
    setShowModal(!showModal);
  }

  return (
    <div>
      <div className="bg-white shadow-md mt-6 md:w-full w-full text-lg rounded-lg z-[-1]">
        <div className="object-contain">
          <img src={image} alt="" className="rounded-t-lg"/>
        </div>
        <div className="p-4 py-6">
          <h2>{name}</h2>
          <p className="text-sm text-gray-400">
            {category} | {area}
          </p>
        </div>
        <div>
          <div className="pb-4 flex justify-end text-sm md:text-lg">
            <button onClick={handleClick} className="shadow-lg p-2 m-2 bg-primary hover:bg-neutral-300 rounded-md"> Read Recipe</button>
            {/* <a href={youtube} className="shadow-lg p-2 m-2 bg-primary hover:bg-neutral-300 rounded-md" rel="noopener noreferrer" target="_blank" >Watch Video</a> */}
          </div>
        </div>
      </div>

      
      {showModal ?
        (
          <div className=" fixed inset-0 z-50 overflow-x-hidden overflow-y-auto  items-center">
          <div className="md:w-2/3 mt-24 md:mx-64 w-4/5 bg-white p-2 w-screen rounded-lg">
            <div className="flex justify-center mt-4">
              <img src={image} alt="" className="rounded-full object-cover w-3/12 "/>
            </div>
            <div className="py-6 m-2">
              <h2 className="text-center">{name}</h2>
              <h2>Instructions:</h2>
              <li className="text-center text-sm px-2 mt-2">
              {instructions}
              </li>
              <h2> Ingredients:</h2>
              <li className="text-left text-sm px-2 mt-2">
              {ingredient1}
              </li>
              <li className="text-left text-sm px-2 mt-2">
              {ingredient2}
              </li>
              <li className="text-left text-sm px-2 mt-2">
              {ingredient3}
              </li>
              <li className="text-left text-sm px-2 mt-2">
              {ingredient4}
              </li>
              <li className="text-left text-sm px-2 mt-2">
              {ingredient5}
              </li>
              <li className="text-left text-sm px-2 mt-2">
              {ingredient6}
              </li>
              <li className="text-left text-sm px-2 mt-2">
              {ingredient7}
              </li>       
              <li className="text-left text-sm px-2 mt-2">
              {ingredient8}
              </li>                      
              <div class="flex justify-end mt-4">
                <a href ={youtube} className="shadow-lg bg-color p-2 rounded-md text-md m-2 hover:bg-neutral-300" rel="noopener noreferrer" target="_blank">Watch video</a>
                <button onClick={handleClick} className="hover:bg-neutral-300 shadow-lg p-2 rounded-md text-md m-2">Close</button>
              </div>
            </div>
          </div>
          </div>
        ): null}
      
    </div>
  )
}

export default Cards