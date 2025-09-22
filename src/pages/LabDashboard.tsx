import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, Upload, LogOut, FileText, Eye } from 'lucide-react';

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
  verified?: boolean;
  labReport?: string;
  blockchainHash?: string;
}

const LabDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [harvests, setHarvests] = useState<HarvestRecord[]>([]);
  const [selectedHarvest, setSelectedHarvest] = useState<HarvestRecord | null>(null);
  const [labReport, setLabReport] = useState('');

  useEffect(() => {
    // Check authentication
    if (!localStorage.getItem('labAuth')) {
      navigate('/lab-login');
      return;
    }
    
    // Load farmer harvests
    const savedHarvests = localStorage.getItem('farmerHarvests');
    if (savedHarvests) {
      setHarvests(JSON.parse(savedHarvests));
    }
  }, [navigate]);

  const handleVerification = (harvestId: string, verified: boolean) => {
    const updatedHarvests = harvests.map(harvest => {
      if (harvest.id === harvestId) {
        const blockchainHash = verified ? `0x${Math.random().toString(16).substring(2, 42)}` : undefined;
        return {
          ...harvest,
          verified,
          blockchainHash
        };
      }
      return harvest;
    });
    
    setHarvests(updatedHarvests);
    localStorage.setItem('farmerHarvests', JSON.stringify(updatedHarvests));
    
    toast({
      title: verified ? "Product Verified ✅" : "Product Marked Unverified ❌",
      description: verified 
        ? "Blockchain record created successfully" 
        : "Product marked as unverified",
    });
  };

  const handleLabReportUpload = (harvestId: string) => {
    if (!labReport) {
      toast({
        title: "Error",
        description: "Please enter lab report details",
        variant: "destructive",
      });
      return;
    }

    const updatedHarvests = harvests.map(harvest => {
      if (harvest.id === harvestId) {
        return {
          ...harvest,
          labReport
        };
      }
      return harvest;
    });
    
    setHarvests(updatedHarvests);
    localStorage.setItem('farmerHarvests', JSON.stringify(updatedHarvests));
    
    toast({
      title: "Lab Report Uploaded",
      description: "Lab test report has been attached to the submission",
    });
    
    setLabReport('');
    setSelectedHarvest(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('labAuth');
    navigate('/lab-login');
  };

  const verifiedCount = harvests.filter(h => h.verified === true).length;
  const unverifiedCount = harvests.filter(h => h.verified === false).length;
  const pendingCount = harvests.filter(h => h.verified === undefined).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 to-muted/10">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-accent">🧪 Lab Dashboard</h1>
            <p className="text-muted-foreground">Verify herb authenticity and manage test reports</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Submissions</p>
                  <p className="text-2xl font-bold text-blue-600">{harvests.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Verified</p>
                  <p className="text-2xl font-bold text-green-600">{verifiedCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Unverified</p>
                  <p className="text-2xl font-bold text-red-600">{unverifiedCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Pending Review</p>
                  <p className="text-2xl font-bold text-orange-600">{pendingCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="submissions" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="submissions">Farmer Submissions</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain Records</TabsTrigger>
          </TabsList>

          {/* Farmer Submissions */}
          <TabsContent value="submissions">
            <Card>
              <CardHeader>
                <CardTitle>Farmer Submissions</CardTitle>
                <CardDescription>Review and verify herb submissions from farmers</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Herb Name</TableHead>
                      <TableHead>Farmer</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Harvest Date</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Image</TableHead>
                      <TableHead>Lab Report</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {harvests.map((harvest) => (
                      <TableRow key={harvest.id}>
                        <TableCell className="font-medium">{harvest.herbName}</TableCell>
                        <TableCell>Farmer ID: {harvest.id.slice(-4)}</TableCell>
                        <TableCell>{harvest.quantity} kg</TableCell>
                        <TableCell>{new Date(harvest.harvestDate).toLocaleDateString()}</TableCell>
                        <TableCell className="text-sm">{harvest.gpsLocation.substring(0, 20)}...</TableCell>
                        <TableCell>
                          {harvest.imageUrl && (
                            <img 
                              src={harvest.imageUrl} 
                              alt={harvest.herbName}
                              className="w-10 h-10 object-cover rounded"
                            />
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => setSelectedHarvest(harvest)}
                                >
                                  <Upload className="w-4 h-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Upload Lab Report</DialogTitle>
                                  <DialogDescription>
                                    Add lab test report for {harvest.herbName}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="labReport">Lab Report Details</Label>
                                    <Input
                                      id="labReport"
                                      placeholder="Enter lab test report details or file path"
                                      value={labReport}
                                      onChange={(e) => setLabReport(e.target.value)}
                                    />
                                  </div>
                                  <Button 
                                    onClick={() => handleLabReportUpload(harvest.id)}
                                    className="w-full"
                                  >
                                    Upload Report
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                            {harvest.labReport && (
                              <Badge variant="outline" className="text-xs">
                                Report Available
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          {harvest.verified === true && (
                            <Badge className="bg-green-100 text-green-800">Verified ✅</Badge>
                          )}
                          {harvest.verified === false && (
                            <Badge variant="destructive">Unverified ❌</Badge>
                          )}
                          {harvest.verified === undefined && (
                            <Badge variant="secondary">Pending Review</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => handleVerification(harvest.id, true)}
                              disabled={harvest.verified === true}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleVerification(harvest.id, false)}
                              disabled={harvest.verified === false}
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blockchain Records */}
          <TabsContent value="blockchain">
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Records</CardTitle>
                <CardDescription>View verified products with blockchain transaction records</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Herb Name</TableHead>
                      <TableHead>Verification Date</TableHead>
                      <TableHead>Blockchain Hash</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Lab Report</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {harvests
                      .filter(h => h.verified === true)
                      .map((harvest) => (
                        <TableRow key={harvest.id}>
                          <TableCell className="font-medium">{harvest.herbName}</TableCell>
                          <TableCell>{new Date(harvest.submittedAt).toLocaleDateString()}</TableCell>
                          <TableCell className="font-mono text-sm">
                            {harvest.blockchainHash}
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800">
                              Blockchain Verified ⛓️
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {harvest.labReport ? (
                              <Badge variant="outline">Available</Badge>
                            ) : (
                              <Badge variant="secondary">Not Uploaded</Badge>
                            )}
                          </TableCell>
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

export default LabDashboard;