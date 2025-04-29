import Navigation from "@/components/molecules/navigation/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <>
      <Navigation collapsed={false} />
      <main className="p-8 rounded-lg gap-8  flex flex-col bg-white w-full h-full">
        <h1 className="text-xl font-semibold">Tracking</h1>
        <Separator />

        <Tabs defaultValue="open" className="w-full">
          <TabsList className="mx-auto">
            <TabsTrigger value="open">Offen</TabsTrigger>
            <TabsTrigger value="closed">Abgeschlossen</TabsTrigger>
          </TabsList>

          <TabsContent className="my-8" value="open">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Geschäft</TableHead>
                  <TableHead>Aktionsende</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      ></label>
                    </div>
                  </TableCell>
                  <TableCell>Ariel Power Waschgel</TableCell>
                  <TableCell>DM</TableCell>
                  <TableCell>25/03/2025</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      ></label>
                    </div>
                  </TableCell>
                  <TableCell>Colgate Zahnpasta</TableCell>
                  <TableCell>Rossmann</TableCell>
                  <TableCell>31/06/2025</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="closed">Test 2</TabsContent>
        </Tabs>
      </main>
    </>
  );
}
