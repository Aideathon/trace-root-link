import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Calendar, MapPin, Upload, LogOut, DollarSign } from 'lucide-react';

interface HarvestRecord {
  id: string;
  herbName: string;
  quantity: string;
  harvestDate: string;
  gpsLocation: string;
  imageUrl: string;
  status: 'pending' | 'paid';
  amount?: number;
  submittedAt: string;
}

const FarmerDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    herbName: '',
    quantity: '',
    harvestDate: '',
    gpsLocation: '',
    imageUrl: ''
  });
  const [harvests, setHarvests] = useState<HarvestRecord[]>([]);

  useEffect(() => {
    // Check authentication
    if (!localStorage.getItem('farmerAuth')) {
      navigate('/farmer-login');
      return;
    }
    
    // Load existing harvests
    const savedHarvests = localStorage.getItem('farmerHarvests');
    if (savedHarvests) {
      setHarvests(JSON.parse(savedHarvests));
    }
    
    // Auto-fill GPS location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            gpsLocation: `${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`
          }));
        },
        () => {
          setFormData(prev => ({
            ...prev,
            gpsLocation: 'Manual entry required'
          }));
        }
      );
    }
  }, [navigate]);

  const herbOptions = [
    'Ashwagandha Root', 'Brahmi Leaf', 'Turmeric Powder', 'Neem Leaf',
    'Tulsi Leaf', 'Shatavari Root', 'Amla Fruit', 'Ginger Root',
    'Haritaki Powder', 'Guduchi Stem'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newHarvest: HarvestRecord = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      amount: Math.floor(Math.random() * 500) + 100, // Mock amount
      submittedAt: new Date().toISOString()
    };
    
    const updatedHarvests = [...harvests, newHarvest];
    setHarvests(updatedHarvests);
    localStorage.setItem('farmerHarvests', JSON.stringify(updatedHarvests));
    
    toast({
      title: "Harvest Submitted Successfully!",
      description: "Your harvest has been logged and sent for verification.",
    });
    
    // Reset form
    setFormData({
      herbName: '',
      quantity: '',
      harvestDate: '',
      gpsLocation: formData.gpsLocation, // Keep GPS
      imageUrl: ''
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('farmerAuth');
    navigate('/farmer-login');
  };

  const totalEarnings = harvests
    .filter(h => h.status === 'paid')
    .reduce((sum, h) => sum + (h.amount || 0), 0);

  const pendingEarnings = harvests
    .filter(h => h.status === 'pending')
    .reduce((sum, h) => sum + (h.amount || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-primary">👨‍🌾 Farmer Dashboard</h1>
            <p className="text-muted-foreground">Manage your herb harvests and track payments</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Earnings</p>
                  <p className="text-2xl font-bold text-green-600">₹{totalEarnings}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Pending Payments</p>
                  <p className="text-2xl font-bold text-orange-600">₹{pendingEarnings}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Upload className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Submissions</p>
                  <p className="text-2xl font-bold text-blue-600">{harvests.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upload" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">Upload Harvest</TabsTrigger>
            <TabsTrigger value="payments">Payment Tracking</TabsTrigger>
            <TabsTrigger value="history">Submission History</TabsTrigger>
          </TabsList>

          {/* Upload Harvest Form */}
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Harvest</CardTitle>
                <CardDescription>Log your herb harvest details</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="herbName">Herb Name</Label>
                      <Select value={formData.herbName} onValueChange={(value) => setFormData(prev => ({...prev, herbName: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select herb" />
                        </SelectTrigger>
                        <SelectContent>
                          {herbOptions.map(herb => (
                            <SelectItem key={herb} value={herb}>{herb}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity (kg)</Label>
                      <Input
                        id="quantity"
                        type="number"
                        placeholder="Enter quantity"
                        value={formData.quantity}
                        onChange={(e) => setFormData(prev => ({...prev, quantity: e.target.value}))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="harvestDate">Harvest Date</Label>
                      <Input
                        id="harvestDate"
                        type="date"
                        value={formData.harvestDate}
                        onChange={(e) => setFormData(prev => ({...prev, harvestDate: e.target.value}))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gpsLocation">GPS Location</Label>
                      <div className="flex">
                        <MapPin className="w-4 h-4 mt-3 mr-2 text-muted-foreground" />
                        <Input
                          id="gpsLocation"
                          placeholder="Auto-detected or manual entry"
                          value={formData.gpsLocation}
                          onChange={(e) => setFormData(prev => ({...prev, gpsLocation: e.target.value}))}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="imageUrl">Herb Image URL</Label>
                    <Input
                      id="imageUrl"
                      type="url"
                      placeholder="Enter image URL"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData(prev => ({...prev, imageUrl: e.target.value}))}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Submit Harvest
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Tracking */}
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment Tracking</CardTitle>
                <CardDescription>Monitor your harvest payments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Herb</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {harvests.map((harvest) => (
                      <TableRow key={harvest.id}>
                        <TableCell>{harvest.herbName}</TableCell>
                        <TableCell>{harvest.quantity} kg</TableCell>
                        <TableCell>₹{harvest.amount}</TableCell>
                        <TableCell>
                          <Badge variant={harvest.status === 'paid' ? 'default' : 'secondary'}>
                            {harvest.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(harvest.harvestDate).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Submission History */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Submission History</CardTitle>
                <CardDescription>Complete history of your harvest submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Herb</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Harvest Date</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {harvests.map((harvest) => (
                      <TableRow key={harvest.id}>
                        <TableCell>{harvest.herbName}</TableCell>
                        <TableCell>{harvest.quantity} kg</TableCell>
                        <TableCell>{new Date(harvest.harvestDate).toLocaleDateString()}</TableCell>
                        <TableCell className="text-sm">{harvest.gpsLocation}</TableCell>
                        <TableCell>
                          <Badge variant={harvest.status === 'paid' ? 'default' : 'secondary'}>
                            {harvest.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(harvest.submittedAt).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FarmerDashboard;