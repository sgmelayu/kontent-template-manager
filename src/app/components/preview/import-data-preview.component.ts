import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { ComponentDependencies } from '../../../di';
import { BaseComponent } from '../../core/base.component';
import { ActiveType, IDataPreviewWrapper, IItemPreview, IItemPreviewWithIndex } from './preview-models';

@Component({
  selector: 'lib-import-data-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './import-data-preview.component.html',
})
export class ImportDataPreview extends BaseComponent implements OnInit {

  @Input() previewData?: IDataPreviewWrapper;
  @Input() showTypes: 'all' | 'contentItemsImport' = 'all';

  private _activeType?: ActiveType;

  public get activeType(): ActiveType {
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
    if (!this.previewData) {
      return undefined;
    }

    if (this.activeType === 'contentTypes') {
      return this.previewData.contentTypes;
    }

    if (this.activeType === 'assets') {
      return this.previewData.assets;
    }

    if (this.activeType === 'taxonomies') {
      return this.previewData.taxonomies;
    }

    if (this.activeType === 'contentItems') {
      return this.previewData.contentItems;
    }

    if (this.activeType === 'languageVariants') {
      return this.previewData.languageVariants;
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
    this.previewedItem = undefined;
    super.detectChanges();
  }
}
