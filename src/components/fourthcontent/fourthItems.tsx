interface Props {
    text: any
}

export default function FourthItems(props: Props) {
    return (
        <div className=" px-10 w-full h-[410px] lg:h-[610px] rounded-3xl bg-white text-[150px] text-black flex justify-center items-center">
            {props.text}
        </div>
    )
}