
interface Props {
    stack: string
}

function StackTag({stack} : Props)  {
    return (
        <div
            className="inline-flex items-center rounded-md border text-xs
            font-semibold transition-colors focus:outline-none
            focus:ring-2 focus:ring-ring focus:ring-offset-2
            text-nowrap border-transparent bg-secondary
            text-secondary-foreground hover:bg-secondary/60
            px-1.5 py-0.5 print:px-1 print:py-0.5 print:text-[8px]
            print:leading-tight">
            {stack}
        </div>
    )
}


export {
    StackTag
}
