import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg">SIM</h3>
            <p className="text-muted-foreground mt-2">
              AI-Powered Investing.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-muted-foreground hover:text-foreground">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-muted-foreground hover:text-foreground">
                  Business
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <div className="mt-2 space-y-2">
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=simulationexchange@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                simulationexchange@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 SIM, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
