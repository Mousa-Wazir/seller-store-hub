
import * as React from "react";
import { cn } from "@/lib/utils";

const ResponsiveTable = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full overflow-auto", className)}
    {...props}
  />
));
ResponsiveTable.displayName = "ResponsiveTable";

const ResponsiveTableContent = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, children, ...props }, ref) => (
  <div className="block lg:table w-full">
    <table
      ref={ref}
      className={cn("hidden lg:table w-full caption-bottom text-sm", className)}
      {...props}
    >
      {children}
    </table>
    
    {/* Mobile card view */}
    <div className="lg:hidden space-y-4">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === 'tbody') {
          return React.Children.map(child.props.children, (row, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              {React.Children.map(row.props.children, (cell, cellIndex) => (
                <div key={cellIndex} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                  {React.cloneElement(cell, { 
                    className: cn(cell.props.className, "text-sm") 
                  })}
                </div>
              ))}
            </div>
          ));
        }
        return child;
      })}
    </div>
  </div>
));
ResponsiveTableContent.displayName = "ResponsiveTableContent";

const ResponsiveTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead 
    ref={ref} 
    className={cn("hidden lg:table-header-group [&_tr]:border-b", className)} 
    {...props} 
  />
));
ResponsiveTableHeader.displayName = "ResponsiveTableHeader";

const ResponsiveTableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("hidden lg:table-row-group [&_tr:last-child]:border-0", className)}
    {...props}
  />
));
ResponsiveTableBody.displayName = "ResponsiveTableBody";

const ResponsiveTableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
));
ResponsiveTableRow.displayName = "ResponsiveTableRow";

const ResponsiveTableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
ResponsiveTableHead.displayName = "ResponsiveTableHead";

const ResponsiveTableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
ResponsiveTableCell.displayName = "ResponsiveTableCell";

export {
  ResponsiveTable,
  ResponsiveTableContent,
  ResponsiveTableHeader,
  ResponsiveTableBody,
  ResponsiveTableHead,
  ResponsiveTableRow,
  ResponsiveTableCell,
};
