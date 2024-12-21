import React from "react";

export default function ProizvodiLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            <div>
                <h2>Sekcija proizvoda</h2>
            </div>
        </div>
    )
}