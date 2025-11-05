import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import Index from "./pages/Index";
import Monitoring from "./pages/Monitoring";
import Analytics from "./pages/Analytics";
import Compliance from "./pages/Compliance";
import DataManagement from "./pages/DataManagement";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 flex items-center gap-4 px-4">
                <SidebarTrigger />
                <div className="flex-1">
                  <Header />
                </div>
              </div>
              <main className="flex-1 p-6 bg-[var(--gradient-subtle)]">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/monitoring" element={<Monitoring />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/compliance" element={<Compliance />} />
                  <Route path="/data" element={<DataManagement />} />
                  <Route path="/settings" element={<Settings />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
