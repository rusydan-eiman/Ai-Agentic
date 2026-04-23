"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, CheckCircle2, AlertCircle } from "lucide-react";

export default function AddOrderPage() {
  const [formData, setFormData] = useState({
    order_id: "",
    customer_name: "",
    item: "",
    item_type: "",
    status: "Pending",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("http://localhost:8000/add-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: data.message });
        setFormData({
          order_id: "",
          customer_name: "",
          item: "",
          item_type: "",
          status: "Pending",
        });
      } else {
        setMessage({ type: "error", text: data.detail || "Failed to add order" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Connection error. Is the backend running?" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-2xl py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-primary" />
            <CardTitle>Add New Order</CardTitle>
          </div>
          <CardDescription>
            Create a new order in the database.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="order_id">Order ID</Label>
                <Input
                  id="order_id"
                  name="order_id"
                  placeholder="e.g. A12345"
                  value={formData.order_id}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="customer_name">Customer Name</Label>
                <Input
                  id="customer_name"
                  name="customer_name"
                  placeholder="e.g. John Doe"
                  value={formData.customer_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="item">Item Name</Label>
              <Input
                id="item"
                name="item"
                placeholder="e.g. Wireless Mouse"
                value={formData.item}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="item_type">Item Type</Label>
                <Input
                  id="item_type"
                  name="item_type"
                  placeholder="e.g. Electronics"
                  value={formData.item_type}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Input
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {message && (
              <div className={`p-4 rounded-md flex items-center gap-2 ${
                message.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
              }`}>
                {message.type === "success" ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <p className="text-sm font-medium">{message.text}</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Adding..." : "Add Order"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
