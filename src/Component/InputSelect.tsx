import { ChangeEvent, RefObject, useRef } from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";

type TEvent = ChangeEvent & { target: { value: string } };
interface IInputSelect<T> {
    title?: string;
    data: (T & { [ki: string]: any })[];
    k: keyof T;
    v: keyof T;
    // handleChange: (v: string) => void;
    handleChange: (e: TEvent) => void;
    value?: any;
    name: string;
}

const InputSelect = <T,>({ title, data, k, v, handleChange: onChange, value, ...rest }: IInputSelect<T>) => {
    const inputData = data.map((item) => ({
        k: item[k],
        v: item[v],
    }));
    const defaultValue = null ? value : "null";

    const ref = useRef<HTMLInputElement>(null);
    return (
        <InputGroup className="relative">
            {title ? (
                <InputGroupText>
                    <strong>{title}</strong>
                </InputGroupText>
            ) : null}
            <Input
                className=""
                minLength={24}
                innerRef={ref}
                type="select"
                onChange={onChange}
                defaultValue={defaultValue}
                value={value ? value : undefined}
                {...rest}
            >
                <option value={"null"} selected hidden></option>
                {inputData.map(({ k: k, v: v }) => (
                    <option key={v} value={v}>
                        {k}
                    </option>
                ))}
            </Input>
            <div
                className="absolute right-8 flex items-center cursor-pointer z-1 text-slate-800 top-[50%] translate-y-[-50%]"
                // style={{ backgroundColor: "red" }}
                onClick={() => {
                    // console.log({ ref: ref.current }, "clicked");
                    if (ref.current) ref.current.value = "";
                    const event = {
                        target: { value: "" },
                    } as TEvent;
                    onChange(event);
                }}
            >
                <div className="rounded-[50%] p-1">
                    <i className="icon-close " />
                </div>
            </div>
        </InputGroup>
    );
};

export { InputSelect };
