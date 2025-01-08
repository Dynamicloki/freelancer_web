import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-10 w-24" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 rounded-lg border">
            <Skeleton className="h-4 w-32 mb-4" />
            <Skeleton className="h-8 w-16" />
          </div>
        ))}
      </div>

      <Skeleton className="h-[400px] w-full rounded-lg" />
    </div>
  );
}