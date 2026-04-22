"use client"

interface TypeOfLoginButtonProps {
  activeType: "Individual" | "Entrepreneur"
  onTypeChange: (type: "Individual" | "Entrepreneur") => void
}

export function TypeOfLoginButton({ activeType, onTypeChange }: TypeOfLoginButtonProps) {
  return (
    <div className="relative flex w-full max-w-[450px] bg-muted rounded-full p-1 mb-6 cursor-pointer select-none border border-border">
      {/* Sliding Background */}
      <div 
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-black dark:bg-white rounded-full transition-all duration-300 ease-in-out ${
          activeType === "Individual" ? "translate-x-0" : "translate-x-full"
        }`}
      />
      
      {/* Individual Button */}
      <div 
        onClick={() => onTypeChange("Individual")}
        className={`relative z-10 flex-1 py-2 text-center text-sm font-medium transition-colors duration-300 ${
          activeType === "Individual" 
            ? "text-white dark:text-black" 
            : "text-muted-foreground"
        }`}
      >
        Individual
      </div>

      {/* Entrepreneur Button */}
      <div 
        onClick={() => onTypeChange("Entrepreneur")}
        className={`relative z-10 flex-1 py-2 text-center text-sm font-medium transition-colors duration-300 ${
          activeType === "Entrepreneur" 
            ? "text-white dark:text-black" 
            : "text-muted-foreground"
        }`}
      >
        Entrepreneur
      </div>
    </div>
  )
}
