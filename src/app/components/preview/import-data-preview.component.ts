import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { ComponentDependencies } from '../../../di';
import { IImportData } from '../../../services';
import { BaseComponent } from '../../core/base.component';

type ActiveType = 'taxonomies' | 'contentTypes' | 'assets' | 'contentItems' | 'languageVariants'

interface IItemPreview {
  title: string;
  data: any;
}

interface IItemPreviewWithIndex extends IItemPreview {
  index: number;
}

@Component({
  selector: 'lib-import-data-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './import-data-preview.component.html',
  styleUrls: ['./import-data-preview.component.scss']
})
export class ImportDataPreview extends BaseComponent implements OnInit {

  @Input() importData?: IImportData;
  @Input() showTypes: 'all' | 'contentItemsImport' = 'all';

  private _activeType?: ActiveType;

  public get activeType(): ActiveType  {
    if (this._activeType) {
      return this._activeType;
    }

    if (this.showTypes === 'all') {
      return 'contentTypes';
    }

    return 'assets';
  }

  public previewedItem?: IItemPreviewWithIndex;

  public get activePreviewedItem(): IItemPreviewWithIndex | undefined {
    if (this.previewedItem) {
      return this.previewedItem;
    }

    if (!this.activeItems) {
      return undefined;
    }

    if (this.activeItems.length > 0) {
      const firstItem = this.activeItems[0];
      return {
        data: firstItem.data,
        index: 0,
        title: firstItem.title
      }
    }
    return undefined;
  }

  public get activeItems(): IItemPreview[] | undefined {
    if (!this.importData) {
      return undefined;
    }

    if (this.activeType === 'contentTypes') {
      return this.importData.contentTypes.map(m => <IItemPreview>{
        title: m.system.name,
        data: m
      });
    }

    if (this.activeType === 'assets') {
      const files: IItemPreview[] = [];
      files.push(...this.importData.assets.map(m => <IItemPreview>{
        title: m.fileName,
        data: m
      }));
      files.push(...this.importData.assetsFromFile.map(m => <IItemPreview>{
        title: m.embeddedAsset.fileName,
        data: m
      }));
      return files;
    }

    if (this.activeType === 'taxonomies') {
      return this.importData.taxonomies.map(m => <IItemPreview>{
        title: m.system.name,
        data: m
      });
    }

    if (this.activeType === 'contentItems') {
      return this.importData.contentItems.map(m => <IItemPreview>{
        title: m.name,
        data: m
      });
    }

    if (this.activeType === 'languageVariants') {
      return this.importData.languageVariants.map(m => <IItemPreview>{
        title: `${m.itemCodename} [${m.languageCodename}]`,
        data: m
      });
    }
  }

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
  }

  ngOnInit(): void {

  }

  showType(type: ActiveType): boolean {
    if (this.showTypes === 'all') {
      return true;
    }

    if (this.showTypes === 'contentItemsImport') {
      const allowedTypes: ActiveType[] = ['assets', 'contentItems', 'languageVariants'];

      return allowedTypes.includes(type);
    }

    throw Error(`Unsupported show type`);
  }

  previewItem(item: IItemPreview, index: number): void {
    this.previewedItem = {
      data: item.data,
      index: index,
      title: item.title
    };
    super.detectChanges();
  }

  setType(type: ActiveType): void {
    this._activeType = type;
    super.detectChanges();
  }
}
