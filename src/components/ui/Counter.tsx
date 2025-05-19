import { useCounterStore } from "@/store/counterStore"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

export function Counter() {
  const { count, increment, decrement, reset, isLoading } = useCounterStore()

  return (
    <Card className="w-full max-w-md">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={decrement}
            disabled={isLoading}
            variant="outline"
          >
            -
          </Button>
          <span className="text-2xl font-bold">
            {isLoading ? "..." : count}
          </span>
          <Button
            onClick={increment}
            disabled={isLoading}
            variant="outline"
          >
            +
          </Button>
        </div>
        <Button
          onClick={reset}
          disabled={isLoading}
          variant="secondary"
          className="w-full"
        >
          Reset
        </Button>
      </div>
    </Card>
  )
}
