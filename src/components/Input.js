const Input = ({ id, type, title, placeholder }) => (
  <div>
    <label htmlFor={ id } className="block mb-2 text-sm text-black font-medium">{ title }</label>
    <input className="bg-white hover:bg-neutral-50 focus:bg-neutral-100 border border-neutral-400 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-primary-400 rounded text-sm text-black placeholder:text-neutral-400 w-full p-3.5" type={ type } id={ id } placeholder={ placeholder } />
  </div>
)

export default Input