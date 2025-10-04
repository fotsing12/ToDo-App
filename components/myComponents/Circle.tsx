import { ReactNode } from "react";
import { View } from "react-native";

type CircleProps = {
    diameter: number,
    color: string,
    children?: ReactNode;
};

export default function Circle({ diameter, color, children }: CircleProps) {
    return (
        <View
            style={
                {
                    width: diameter,
                    height: diameter,
                    borderRadius: diameter / 2, // half of width/height
                    backgroundColor: color,
                    alignItems: "center",
                    justifyContent: "center"
                }
            }
        >
            {children}

        </View>
    )
}