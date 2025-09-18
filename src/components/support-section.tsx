"use client";
import { Heart, CreditCard, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function SupportSection() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  // Replace with your actual bank account details
  const bankDetails = {
    accountNumber: "00300112827108",
    accountTitle: "Syed Yousaf Raza",
    bankName: "Meezan Bank",
    branchCode: "1166",
    iban: "PK65MEZN0000300112827108", // added IBAN
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Support Me</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Help support my journey in computer science and AI development. Your contribution helps me continue learning and building amazing projects!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Support education and technology development"
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-support-education"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Heart className="text-red-500 h-6 w-6 mr-3" />
                <h3 className="text-2xl font-semibold text-secondary">Why Support?</h3>
              </div>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Help fund my education and learning resources
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Support development of open-source AI projects
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Enable participation in tech conferences and workshops
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Help with purchasing essential software/tools
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <div className="flex items-center mb-4">
                <CreditCard className="text-primary h-6 w-6 mr-3" />
                <h3 className="text-xl font-semibold text-secondary">Bank Account Details</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Account Title</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      value={bankDetails.accountTitle}
                      readOnly
                      className="flex-1"
                      data-testid="input-account-title"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(bankDetails.accountTitle, "Account Title")}
                      data-testid="button-copy-title"
                    >
                      {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Account Number</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      value={bankDetails.accountNumber}
                      readOnly
                      className="flex-1"
                      data-testid="input-account-number"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(bankDetails.accountNumber, "Account Number")}
                      data-testid="button-copy-number"
                    >
                      {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {/* IBAN Field */}
                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">IBAN</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      value={bankDetails.iban}
                      readOnly
                      className="flex-1"
                      data-testid="input-iban"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(bankDetails.iban, "IBAN")}
                      data-testid="button-copy-iban"
                    >
                      {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-slate-700 mb-2 block">Bank Name</Label>
                    <Input
                      value={bankDetails.bankName}
                      readOnly
                      data-testid="input-bank-name"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-slate-700 mb-2 block">Branch Code</Label>
                    <Input
                      value={bankDetails.branchCode}
                      readOnly
                      data-testid="input-branch-code"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Any amount is appreciated! Your support helps me focus on learning and creating valuable projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
