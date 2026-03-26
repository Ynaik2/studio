'use client';

import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export function CookieBanner() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the disclaimer in this session
    const hasAccepted = sessionStorage.getItem('srb_disclaimer_accepted');
    if (!hasAccepted) {
      setShowDialog(true);
    }
  }, []);

  const handleAccept = () => {
    // Mark as accepted for the duration of the browser session
    sessionStorage.setItem('srb_disclaimer_accepted', 'true');
    setShowDialog(false);
  };

  return (
    <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-headline text-center">DISCLAIMER</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="text-sm text-muted-foreground space-y-4 text-justify max-h-[60vh] overflow-y-auto pr-4 mt-4">
                <p>
                    The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By clicking on &apos;I AGREE&apos;, the user acknowledges that:
                </p>
                <ul className="list-disc pl-5 space-y-3">
                    <li>
                        The user wishes to gain more information about SRB Law Partners, its practice areas and its attorneys, for his/her own information and use;
                    </li>
                    <li>
                        The information is made available/provided to the user only on his/her specific request and any information obtained or material downloaded from this website is completely at the user&apos;s volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship; and
                    </li>
                    <li>
                        None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.
                    </li>
                </ul>
                <p>
                    SRB Law Partners is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
                </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center mt-6">
          <AlertDialogAction onClick={handleAccept} className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg">
            I AGREE
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
