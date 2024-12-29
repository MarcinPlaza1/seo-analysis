"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  score: Math.floor(Math.random() * 20) + 80,
  traffic: Math.floor(Math.random() * 1000) + 2000,
  rankings: Math.floor(Math.random() * 5) + 8,
}));

export function DashboardCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="score">
          <TabsList>
            <TabsTrigger value="score">SEO Score</TabsTrigger>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="rankings">Rankings</TabsTrigger>
          </TabsList>
          
          <div className="h-[300px] mt-4">
            <TabsContent value="score">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="traffic">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="traffic" stroke="hsl(var(--primary))" />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="rankings">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="date" />
                  <YAxis reversed />
                  <Tooltip />
                  <Line type="monotone" dataKey="rankings" stroke="hsl(var(--primary))" />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}