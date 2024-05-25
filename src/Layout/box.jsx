

function box({props}) {
  return (
    <div className="flex flex-col gap-5 p-[10px] bg-slate-300 rounded-lg items-center align-middle justify-center">
      <h2 className="t text-2xl text-slate-950 font-bold">Red Dead Redemption</h2>
      <p className="t text-lg font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cumque molestias minus nam alias error recusandae dolores porro dolore cum, tempora repudiandae, voluptate maiores eius! Adipisci non tenetur minima hic possimus illo aliquam, architecto quis quo dicta asperiores perspiciatis pariatur illum itaque libero facere, neque minus quia, labore et cumque.</p>
      
      <strong className="t text-center pt-4">This game was released in {props}</strong>
    </div>
  )
}

export default box
